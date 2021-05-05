export const mygraph = {
    query: `
    query{
        categories(
          filters: {
            parent_id: {in: ["2"]}
          }
          pageSize:10
          currentPage: 1
        ) {
          total_count
          items {
            uid
            level
            name
            path
            children_count
            children {
              uid
              level
              name
              path
              children_count
              children {
                uid
                level
                name
                path
              }
            }
          }
          page_info {
            current_page
            page_size
            total_pages
          }
        }
      }
      `
}