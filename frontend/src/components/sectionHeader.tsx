export default function SectionHeader(props: any) {
  return (
    <div className="sectionHeader flex items-center gap-6 ">
      <div className="w-[20px] h-[40px] bg-mainColor rounded"></div>
      <p className="todayText text-mainColor font-semibold text-[16px]">
        {props.title}
      </p>
    </div>
  );
}
