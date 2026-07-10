import React from "react";
import { Form, redirect } from "react-router";
import '../App.css'
export async function action({ request }) {
    const formData = await request.formData()

    const newBlog = {
        title: formData.get("title"),
        author: formData.get("author"),
        category: formData.get("category"),
        image: formData.get("image"),
        description: formData.get("description"),
        content: formData.get("content"),


        createdAt: new Date().toISOString().split("T")[0],
        readingTime: "5 min",
        views: 0,
        likes: 0,
    };

    await fetch("http://localhost:3000/blogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newBlog)
    })

    return redirect("/blog") 
}

function AddBlog() {
    return (
        <div className="blog-create">

            <div className="blog-create__header">
                <h1 className="blog-create__title">Create New Blog</h1>
                <p className="blog-create__subtitle">
                    Fill in the information below to publish a new article.
                </p>
            </div>

            <Form method="post" className="blog-create__form">

                <div className="blog-create__group">
                    <label className="blog-create__label">Blog Title</label>
                    <input
                        className="blog-create__input"
                        type="text"
                        name="title"
                        placeholder="Enter blog title"
                    />
                </div>

                <div className="blog-create__group">
                    <label className="blog-create__label">Author</label>
                    <input
                        className="blog-create__input"
                        type="text"
                        name="author"
                        placeholder="Author name"
                    />
                </div>

                <div className="blog-create__group">
                    <label className="blog-create__label">Category</label>
                    <input
                        className="blog-create__input"
                        type="text"
                        name="category"
                        placeholder="Technology"
                    />
                </div>

                <div className="blog-create__group">
                    <label className="blog-create__label">Image URL</label>
                    <input
                        className="blog-create__input"
                        type="text"
                        name="image"
                        placeholder="https://..."
                    />
                </div>

                <div className="blog-create__group blog-create__group--full">
                    <label className="blog-create__label">Description</label>
                    <textarea
                        className="blog-create__textarea"
                        name="description"
                        rows="4"
                    ></textarea>
                </div>

                <div className="blog-create__group blog-create__group--full">
                    <label className="blog-create__label">Content</label>
                    <textarea
                        className="blog-create__textarea blog-create__textarea--large"
                        name="content"
                    ></textarea>
                </div>

                <button className="blog-create__button">
                    Publish Blog
                </button>

            </Form>

        </div>
    );
}

export default AddBlog;