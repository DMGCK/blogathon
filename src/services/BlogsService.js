import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class BlogsService {

 async getAll() {
    const res = await api.get('blogs')
    console.log(res.data)
    AppState.blogs = res.data
  }

  async getBlog(id) {
    const res = await api.get(`blogs/${id}`)
    logger.log(res.data, 'this is the get singleton')
    AppState.activeBlog = res.data
  }

  setActiveBlog(blog) {
    AppState.activeBlog = blog;
    logger.log(AppState.activeBlog, 'actove bloig')
  }

  async getComments(blog) {
    const res = await api.get('comments')
    console.log(res.data)
  }

}

export const blogsService = new BlogsService()