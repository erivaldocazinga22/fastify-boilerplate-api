interface PaginationMapperParams<T> {
	data: T[];
	path: string;
	page?: number;
	limit?: number;
}

export interface ReadWithPagination<T> {
	data: T[];
	pagination: {
		path: string;
		previusPage: number;
		currentPage: number;
		nextPage: number;
		lastPage: number;
		hasNextPage: boolean;
		total: number;
	};
}

export function paginationMapper<T>({
	data,
	page = 1,
	limit = 10,
	path,
}: PaginationMapperParams<T>): ReadWithPagination<T> {
	const total = data.length;
	const lastPage = Math.ceil(total / limit);
	return {
		data,
		pagination: {
			path,
			previusPage: Number(page) > 1 ? Number(page) - 1 : 1,
			currentPage: Number(page),
			nextPage: Number(page) < lastPage ? Number(page) + 1 : lastPage,
			lastPage,
			hasNextPage: Number(page) < lastPage,
			total,
		},
	};
}
