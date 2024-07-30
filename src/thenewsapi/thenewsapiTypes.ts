export interface ParamsObjectType {
    [key: string]: string | undefined;
    api_token: string;
    locale?: string;
    search?: string;
    search_fields?: string;
    categories?: string;
    exclude_categories?: string;
    domains?: string;
    exclude_domains?: string;
    source_ids?: string;
    exclude_source_ids?: string;
    language?: string;
    published_before?: string;
    published_on?: string;
    sort?: string;
    limit?: string;
    page?: string;
};
