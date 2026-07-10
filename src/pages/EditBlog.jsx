import React from "react";
import {
    Form,
    useLoaderData,
    redirect,
} from "react-router";
import './Edit.css'
// GET
export async function loader({ params }) {
    const res = await fetch(
        `http://localhost:3000/blogs/${params.id}`
    );

    return res.json();
}

// PUT
export async function action({ request, params }) {
    const formData = await request.formData();

    const updatedBlog = {
        title: formData.get("title"),
        author: formData.get("author"),
        category: formData.get("category"),
        image: formData.get("image"),
        description: formData.get("description"),
        content: formData.get("content"),
    };

    await fetch(
        `http://localhost:3000/blogs/${params.id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedBlog),
        }
    );

    return redirect("/blog");
}

function EditBlog() {
    const blog = useLoaderData();

    return (
        <>
            <div className="edit-page">

                <div>
                    <div className="edit-blog-header"> <h1>Edit Blog</h1> <p>Update your article information and save the changes.</p> </div>

                    <Form className="edit-blog-form">
                        <Form method="post" > <input className="edit-blog-input" name="title" defaultValue={blog.title} /> <input className="edit-blog-input" name="author" defaultValue={blog.author} /> <input className="edit-blog-input" name="category" defaultValue={blog.category} /> <input className="edit-blog-input" name="image" defaultValue={blog.image} /> <textarea className="edit-blog-textarea" name="description" defaultValue={blog.description} /> <textarea className="edit-blog-textarea edit-blog-content" name="content" defaultValue={blog.content} /> <button className="edit-blog-btn" type="submit" > Save Changes </button> </Form>
                    </Form>

                </div>

            </div>
        </>
    );
}

export default EditBlog;