export interface Data {
  id: string;
  title: string;
  body: string;
}

export interface NewTaskData {
  title: string;
  body: string;
}

export interface TaskData {
  id: number;
  title: string;
  text: string;
  deadline: string;
}

export interface NewTask {
  title: string;
  text: string;
  deadline: string;
}
