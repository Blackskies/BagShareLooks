const twoDGFrmtr = (val: number) => {
  return val < 10 ? "0" + val : val; //return 0 appended string if val is less than 10
};

export const getDate = () => {
  const date = new Date();
  let day = twoDGFrmtr(date.getDate());
  let month = twoDGFrmtr(date.getMonth() + 1);
  let year = date.getFullYear();
  let formattedDate = year + "-" + month + "-" + day;
  return formattedDate;
};

export const getFullFormattedDate = (dateStr: string) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const d = new Date(dateStr);
  let day = days[d.getDay()];
  let date = twoDGFrmtr(d.getDate());
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  return day + ", " + date + " " + month + " " + year;
};
