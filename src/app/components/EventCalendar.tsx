"use client";

import { useRouter } from "next/navigation";
// import { time } from "console";
// import Image from "next/image";
// import { describe } from "node:test";
// import { title } from "process";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
// const events = [
//   {
//     id: 1,
//     title: "Lorem ipsum dolor",
//     time: "12:00 PM - 2:00 PM",
//     descripttion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     id: 2,
//     title: "Lorem ipsum dolor",
//     time: "12:00 PM - 2:00 PM",
//     descripttion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     id: 3,
//     title: "Lorem ipsum dolor",
//     time: "12:00 PM - 2:00 PM",
//     descripttion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
// ];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  const router = useRouter();

  useEffect(() => {
    if (value instanceof Date) {
      router.push(`?date=${value}`);
    }
  }, [value, router]);

  return <Calendar onChange={onChange} value={value} />;
  // <div className="bg-white p-4 rounded-md ">
  //   <Calendar onChange={onChange} value={value} />
  //   <div className="flex items-center justify-between">
  //     <h1 className="text-xl font-semibold my-4">Events</h1>
  //     <Image src="/moreDark.png" alt="" width={20} height={20} />
  //   </div>
  //   <div className="flex flex-col gap-4">
  // {events.map((event) => (
  //   <div
  //     className="p-5  rounded-md borer-2 border-gray-100  border-t-4 odd:border-t-LamaSky even:border-t-LamaPurple"
  //     key={event.id}
  //   >
  //     <div className="flex items-center justify-between">
  //       <h1 className="font-semibold text-gray-600">{event.title}</h1>
  //       <span className="text-gray-300 text-xs">{event.time}</span>
  //     </div>
  //     <p className="mt-2 text-gray-400 text-sm">{event.descripttion}</p>
  //   </div>
  // ))}
  //   </div>
  // </div>
};

export default EventCalendar;

// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// type ValuePiece = Date | null;
// type Value = ValuePiece | [ValuePiece, ValuePiece];

// // TEMPORARY
// const events = [
//   {
//     id: 1,
//     title: "Lorem ipsum dolor",
//     time: "12:00 PM - 2:00 PM",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     id: 2,
//     title: "Lorem ipsum dolor",
//     time: "12:00 PM - 2:00 PM",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     id: 3,
//     title: "Lorem ipsum dolor",
//     time: "12:00 PM - 2:00 PM",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
// ];

// const EventCalendar = () => {
//   const [value, setValue] = useState<Value | null>(null);

//   useEffect(() => {
//     setValue(new Date()); // ✅ ตั้งค่า `Date` หลังจากโหลด Client เพื่อป้องกัน hydration error
//   }, []);

//   if (!value) return null; // ✅ ป้องกัน hydration mismatch โดยไม่เรนเดอร์ UI ก่อนที่ค่าจะถูกเซ็ต

//   return (
//     <div className="bg-white p-4 rounded-md">
//       <Calendar onChange={setValue} value={value} locale="th-TH" />{" "}
//       {/* ✅ กำหนด locale เป็นไทย */}
//       <div className="flex items-center justify-between">
//         <h1 className="text-xl font-semibold my-4">Events</h1>
//         <Image src="/moreDark.png" alt="More" width={20} height={20} />
//       </div>
//       <div className="flex flex-col gap-4">
//         {events.map((event) => (
//           <div
//             className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-LamaSky even:border-t-LamaPurple"
//             key={event.id}
//           >
//             <div className="flex items-center justify-between">
//               <h1 className="font-semibold text-gray-600">{event.title}</h1>
//               <span className="text-gray-300 text-xs">{event.time}</span>
//             </div>
//             <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventCalendar;
