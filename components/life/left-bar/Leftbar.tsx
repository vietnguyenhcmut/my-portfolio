import { ContentOfLifeProps } from "@/app/life/page";

type LeftbarProps = {
  contentOfLife: ContentOfLifeProps[];
  setIndexOfItem: (index: number) => void;
};

export default function Leftbar({
  contentOfLife,
  setIndexOfItem,
}: LeftbarProps) {
  return (
    <div
      className="flex flex-col items-center justify-start w-96 border-r border-t pt-2"
      style={{ height: "calc(100vh - 80px)", overflow: "auto" }}
    >
      {contentOfLife.map((item, index) => (
        <div
          key={index}
          className="p-2 mb-1 cursor-pointer w-72 rounded-lg hover:bg-accent hover:text-blue-500 transition-all duration-200"
          onClick={() => setIndexOfItem(index)}
        >
          <p className="text-sm">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
