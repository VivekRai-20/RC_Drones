import { useState } from "react";
import { FiEdit, FiLogOut, FiUser, FiMail } from "react-icons/fi";

const Profile = () => {
  // 🔹 Dummy user data (replace with backend later)
  const [user, setUser] = useState({
    name: "Vivek Rai",
    email: "vivek@example.com",
  });

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(user);

  const handleSave = () => {
    setUser(form);
    setEditing(false);

    // 🔌 Backend call later
    console.log("Updated Profile:", form);
  };

  return (
    <section className="min-h-screen bg-[#fdf6ee] px-4 py-16">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <h1 className="font-zentry text-3xl text-gray-900">
            My Profile
          </h1>

          <button
            className="flex items-center gap-2 rounded-md border border-black/20
            px-4 py-2 text-sm text-gray-700 hover:border-black hover:text-black transition cursor-pointer"
          >
            <FiLogOut />
            Logout
          </button>
        </div>

        {/* Profile Card */}
        <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-8">

          <div className="flex items-center gap-6">
            {/* Avatar */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black/10">
              <FiUser size={32} />
            </div>

            {/* Info */}
            <div className="flex-1">
              {editing ? (
                <div className="space-y-4">

                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-md border border-black/20 bg-[#fffaf3]
                    px-3 py-2 text-sm outline-none focus:border-black"
                  />

                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-md border border-black/20 bg-[#fffaf3]
                    px-3 py-2 text-sm outline-none focus:border-black"
                  />

                </div>
              ) : (
                <div>
                  <p className="text-lg font-medium text-gray-900">
                    {user.name}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-gray-600">
                    <FiMail /> {user.email}
                  </p>
                </div>
              )}
            </div>

            {/* Edit Button */}
            <button
              onClick={() => (editing ? handleSave() : setEditing(true))}
              className="flex items-center gap-2 rounded-md bg-black px-4 py-2
              text-sm text-white hover:opacity-90 transition cursor-pointer"
            >
              <FiEdit />
              {editing ? "Save" : "Edit"}
            </button>
          </div>
        </div>

        {/* Orders Section */}
        <div className="mt-12">
          <h2 className="mb-4 text-xl font-medium text-gray-900">
            Order History
          </h2>

          <div className="rounded-xl border border-black/10 bg-white/60 p-6 text-sm text-gray-600">
            No orders yet.
          </div>
        </div>

      </div>
    </section>
  );
};

export default Profile;
