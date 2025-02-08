import prisma from "@/lib/prisma";
import { constants } from "buffer";
import { number } from "zod";
import BigCalendar from "./BigCalender";
import { title } from "process";
import { start } from "repl";
import { adjustScheduleToCurrentWeek } from "@/lib/utils";

const BigCalendarContainer = async ({
  type,
  id,
}: {
  type: "teacherId" | "classId";
  id: string | number;
}) => {
  const dataRes = await prisma.lesson.findMany({
    where: {
      ...(type === "teacherId"
        ? { teacherId: id as string }
        : { classId: id as number }),
    },
  });

  const data = dataRes.map((lesson) => ({
    title: lesson.name,
    start: lesson.startTime,
    end: lesson.endTime,
  }));

  const Schedule = adjustScheduleToCurrentWeek(data);

  return (
    <div className="">
      <BigCalendar data={Schedule} />
    </div>
  );
};

export default BigCalendarContainer;
