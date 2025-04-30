import '@testing-library/jest-dom';

import dotenv from 'dotenv';
import path from 'path';

// 여기 추가
dotenv.config({ path: path.resolve(__dirname, '../.env.test') });
