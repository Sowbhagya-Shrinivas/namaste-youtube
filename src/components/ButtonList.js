import Button from "./Button";

const list = [
  "All",
  "Live",
  "Soccers",
  "Gaming",
  "Songs",
  "Cricket",
  "Cooking",
  "News",
  "LoveSongs",
  "Motivation",
  "watched",
  "NewToYou",
  "RecentlyUploaded"
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((btn,idx) => (
        <Button key={idx} name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
