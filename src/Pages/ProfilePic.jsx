import { useEffect, useState } from "react";

const ProfilePic = ({ contacts, setContacts }) => {
 const [index, setIndex] = useState(0);

  // ✅ Fetch
  useEffect(() => {
    fetch("https://contact-server-zs3l.onrender.com/contacts")
      .then(res => res.json())
      .then(setContacts)
      .catch(console.error);
  }, [setContacts]);

  // ✅ Auto rotate
  useEffect(() => {
    if (!contacts.length) return;

    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % contacts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [contacts.length]);

  // ✅ Easy way: 4 items
  const visible = contacts
    .concat(contacts) // loop easy
    .slice(index, index + 5);

  return (
    <div className=" text-center bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-purple-500/10 p-20">

      {/* 🔥 Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 
        bg-gradient-to-r from-cyan-400 to-blue-500 
        bg-clip-text text-transparent">
        ✨ Our Members
      </h2>

      {/* 🔥 Glass Container */}
      <div className="flex justify-center gap-8 flex-wrap">

        {visible.map((member) => (
          <div
            key={member._id}
            className="backdrop-blur-xl bg-white/10 border border-white/20 
                       rounded-2xl p-5 w-48
                       shadow-[0_0_30px_rgba(0,255,255,0.2)]
                       hover:shadow-[0_0_40px_rgba(0,255,255,0.6)]
                       transition-all duration-500 hover:-translate-y-2"
          >

            {/* 🌟 Image */}
            <img
              src={member.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover 
              border-2 border-cyan-400
              shadow-[0_0_20px_cyan]
              transition-all duration-500
              hover:scale-110 hover:shadow-[0_0_35px_cyan]"
            />

            {/* 👤 Name */}
            <p className="mt-3 text-sm font-semibold text-white tracking-wide">
              {member.name}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProfilePic;