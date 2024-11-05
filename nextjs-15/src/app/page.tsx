import { revalidatePath } from "next/cache";
import Form from "next/form";

type MockUser = {
  id: number;
  name: string;
};

export default async function Home() {
  async function addUser(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const res = await fetch(
      "https://6729d3026d5fa4901b6e81ed.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      },
    );
    const newUser = await res.json();
    console.log(newUser);
    revalidatePath("/");
  }

  // https://mockapi.io/ if need can create this over here
  const res = await fetch("https://6729d3026d5fa4901b6e81ed.mockapi.io/users");
  const users = await res.json();

  return (
    <div className="px-4 my-8">
      <Form action={addUser} className="mb-4">
        <input
          type="text"
          name="name"
          required
          className="p-2 mr-2 border border-gray-300 rounded text-gray-700"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add User
        </button>
      </Form>
      <div className="flex gap-2 flex-wrap">
        {users.map((user: MockUser) => (
          <div
            key={user.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700 whitespace-nowrap"
          >
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}
