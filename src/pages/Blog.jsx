import React from 'react'
import { useLoaderData, Link, Form } from 'react-router'
import '../App.css'

export async function loader() {
    const res = await fetch("http://localhost:3000/blogs")
    const blogs = res.json()
    return blogs;
}

function Blog() {
    const blogs = useLoaderData()
    return (
        <div>
            {blogs.map((blogItem) => {
                return <>
                    <div className="blog" key={blogItem.id}>
                        <img src={blogItem.image} alt={blogItem.title} />

                        <div className="blog-content">
                            <span className="blog-category">{blogItem.category}</span>

                            <h1>{blogItem.title}</h1>

                            <p className="blog-author">✍️ {blogItem.author}</p>

                            <p className="blog-description">{blogItem.description}</p>

                            <p className="blog-text">{blogItem.content}</p>

                            <div className="blog-info">
                                <span>📅 {blogItem.createdAt}</span>
                                <span>⏱ {blogItem.readingTime}</span>
                                <span>👀 {blogItem.views}</span>
                                <span>❤️ {blogItem.likes}</span>
                                <div className="blog-actions">
                                    <Link style={{textDecoration:"none"}}
                                        to={`/blog/edit/${blogItem.id}`}
                                        className="edit-btn"
                                    >
                                        ✏️
                                    </Link>

                                    <Form
                                        method="post"
                                        action={`/blog/delete/${blogItem.id}`}
                                    >
                                        <button className="delete-btn" type="submit">
                                            🗑️
                                        </button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            })}
        </div>
    )
}

export default Blog