import { useFetch } from "@/composables/useFetch";
import BookInterface from "@/interfaces/BookInterface";
import ResponseInterface from "@/interfaces/ResponseInterface";

export default class BookBuilder {
    private readonly apiUrl: string;

    constructor() {
        this.apiUrl = import.meta.env.VITE_APP_ADMIN_FILE_URL;
    }

    async list(): Promise<BookInterface[]> {
        const response: ResponseInterface<{ books: BookInterface[] }> = await useFetch({
            url: "/book",
            method: "GET",
        });
        await Promise.all(
            response.data.books.map((book: BookInterface) => {
                book.imagePath = `${this.apiUrl}/${book.imagePath}`;
                book.filePath = `${this.apiUrl}/${book.filePath}`;
            })
        );

        return response.data.books;
    }

    async create(book: BookInterface): Promise<string> {
        const response: ResponseInterface<{ message: string }> = await useFetch({
            url: "/book",
            method: "POST",
            body: JSON.stringify(book)
        });

        return response.data.message;
    }

    async update(book: BookInterface): Promise<string> {
        const response: ResponseInterface<{ message: string }> = await useFetch({
            url: "/book",
            method: "PATCH",
            body: JSON.stringify(book)
        });

        return response.data.message;
    }

    async delete(id: string): Promise<string> {
        const response: ResponseInterface<{ message: string }> = await useFetch( {
            url: "/book",
            method: "DELETE",
            body: JSON.stringify({ id })
        });

        return response.data.message;
    }
}
