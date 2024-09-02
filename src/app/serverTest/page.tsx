import { addPost, deletePost, updatePost } from "@/lib/actions";

const server = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="description" name="description" />
        <input type="text" placeholder="img" name="img" />
        <input type="text" placeholder="userId" name="userId" />
        <input type="text" placeholder="slug" name="slug" />
        <button type="submit">Create post</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="post id" name="id" />
        <button type="submit">delete</button>
      </form>

      <form action={updatePost}>
        <input type="text" name="id" placeholder="id"/>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="description" name="description" />
        <input type="text" placeholder="img" name="img" />
        <input type="text" placeholder="userId" name="userId" />
        <input type="text" placeholder="slug" name="slug" />
        <button type="submit">Update post</button>
      </form>
    </div>
  );
};

export default server;
