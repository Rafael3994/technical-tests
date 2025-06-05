import { render } from "@testing-library/react-native";
import HomeScreen from "@/app/(tabs)/index";

jest.mock('@react-native-async-storage/async-storage', () => ({
    getItem: jest.fn().mockResolvedValue('{storageBooks: {ableBooks: [], readingList: []}}'),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
}));

jest.mock('@/components/WrapperCustom', () => ({ children }: { children: React.ReactNode }) => <>{children}</>);

jest.mock('@/api/context/books.context', () => ({
    useBooksContext: jest.fn().mockReturnValue({
        ableBooksContext: [],
        setAbleBooksState: jest.fn(),
    }),
}));

describe('MyHomeScreen', () => {
    it('should by pass', () => {
        const { getByText } = render(
            <HomeScreen />
        );

        expect(getByText('Libros disponibles')).toBeTruthy();
        expect(getByText('No hay libros disponibles')).toBeTruthy();
    });

    it('should render books', () => {
        const mockBooks = [
            { ISBN: '123', title: 'Book 1', author: 'Author 1' },
            { ISBN: '456', title: 'Book 2', author: 'Author 2' },
        ];

        const useBooksContextMock = require('@/api/context/books.context').useBooksContext;
        useBooksContextMock.mockReturnValue({
            ableBooksContext: mockBooks,
            setAbleBooksState: jest.fn(),
        });

        const { getByText, queryByText, debug } = render(<HomeScreen />);

        expect(getByText('Libros disponibles')).toBeTruthy();
        expect(queryByText('No hay libros disponibles')).toBeNull();

        // Verificar que los libros se renderizan
        expect(getByText('Book 1')).toBeTruthy();
        expect(getByText('Book 2')).toBeTruthy();
    });
});