import { render, screen, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import SchedulePage from './SchedulePage';
import useSchedules from '../../hooks/useSchedule';

jest.mock('../../hooks/useSchedule', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockedUseSchedules = useSchedules as jest.MockedFunction<
  typeof useSchedules
>;

describe('SchedulePage', () => {
  const queryClient = new QueryClient();
  const mockPostSchedule = jest.fn();

  const renderWithProviders = (component: React.ReactNode) => {
    return render(
      <QueryClientProvider client={queryClient}>
        {component}
      </QueryClientProvider>,
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockedUseSchedules.mockReturnValue({
      postSchedule: mockPostSchedule,
      deleteSchedule: jest.fn(),
    });
  });

  it('renders SchedulePage component', () => {
    renderWithProviders(<SchedulePage />);
    expect(
      screen.getByPlaceholderText('예 ) 오늘 오후 7시 팀플 회의'),
    ).toBeInTheDocument();
  });

  it('renders TextField component', () => {
    renderWithProviders(<SchedulePage />);
    const inputElement =
      screen.getByPlaceholderText('예 ) 오늘 오후 7시 팀플 회의');
    expect(inputElement).toBeInTheDocument();
  });

  it('renders ScheduleCard component', () => {
    renderWithProviders(<SchedulePage />);
    expect(screen.getByText('일정')).toBeInTheDocument();
  });

  it('handles schedule submission', () => {
    renderWithProviders(<SchedulePage />);
    const inputElement =
      screen.getByPlaceholderText('예 ) 오늘 오후 7시 팀플 회의');
    const submitButton = screen.getByText('등록');

    fireEvent.click(submitButton);
    expect(mockPostSchedule).not.toHaveBeenCalled();

    fireEvent.change(inputElement, {
      target: { value: '오늘 오후 7시 팀플 회의' },
    });
    fireEvent.click(submitButton);
    expect(mockPostSchedule).toHaveBeenCalledWith('오늘 오후 7시 팀플 회의');
  });
});
