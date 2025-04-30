import { render, screen, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import SchedulePage from './SchedulePage';
import useSchedules from '../../hooks/useSchedule';

jest.mock('../../hooks/useSchedule', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../../utils/axios', () => {
  return {
    api: {
      get: jest.fn(),
      post: jest.fn(),
      delete: jest.fn(),
      interceptors: {
        request: { use: jest.fn() },
        response: { use: jest.fn() },
      },
    },
  };
});

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

  it('스케줄 페이지 랜더링 시 TextField의 PlaceHolder가 보여야한다.', () => {
    renderWithProviders(<SchedulePage />);
    expect(
      screen.getByPlaceholderText('예 ) 오늘 오후 7시 팀플 회의'),
    ).toBeInTheDocument();
  });

  it('버튼 클릭시 일정이 등록되어야 한다', () => {
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
