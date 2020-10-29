const initState = {
  projects: [
    { id: "1", title: "help me find peach", content: "bla ba bla" },
    { id: "2", title: "help me find nova fluffy husky", content: "bla ba bla" },
    { id: "3", title: "help me find myself", content: "bla ba bla" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("create project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
