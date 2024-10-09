export interface Task {
  name: string;
  desc: string;
  initDate: string;
  endDate: string;
  dificult: string;
  TeamMembers: string;
}

export const Tasks: Task[] = [
  {
    name: "Task 1",
    desc: "Description for task 1",
    initDate: "2024-10-01",
    endDate: "2024-10-05",
    dificult: "Medium",
    TeamMembers: "Member A, Member B",
  },
  {
    name: "Task 2",
    desc: "Description for task 2",
    initDate: "2024-10-02",
    endDate: "2024-10-06",
    dificult: "High",
    TeamMembers: "Member C",
  },
  {
    name: "Task 3",
    desc: "Description for task 3",
    initDate: "2024-10-03",
    endDate: "2024-10-07",
    dificult: "Low",
    TeamMembers: "Member D",
  },
  {
    name: "Task 4",
    desc: "Description for task 4",
    initDate: "2024-10-04",
    endDate: "2024-10-08",
    dificult: "Medium",
    TeamMembers: "Member E, Member F",
  },
  {
    name: "Task 5",
    desc: "Description for task 5",
    initDate: "2024-10-05",
    endDate: "2024-10-09",
    dificult: "High",
    TeamMembers: "Member G",
  },
  {
    name: "Task 6",
    desc: "Description for task 6",
    initDate: "2024-10-06",
    endDate: "2024-10-10",
    dificult: "Medium",
    TeamMembers: "Member H, Member I",
  },
  {
    name: "Task 7",
    desc: "Description for task 7",
    initDate: "2024-10-07",
    endDate: "2024-10-11",
    dificult: "Low",
    TeamMembers: "Member J",
  },
  {
    name: "Task 8",
    desc: "Description for task 8",
    initDate: "2024-10-08",
    endDate: "2024-10-12",
    dificult: "High",
    TeamMembers: "Member K, Member L",
  },
];
