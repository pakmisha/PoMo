export const state = () => ({
  projects: null,
  project: null,
});
export const mutations = {
  SET_PROJECTS(state, projects) {
    state.projects = projects;
  },
  SET_PROJECT(state, project) {
    state.project = project;
  },
};
export const actions = {
  async getProjects({ commit }) {
    try {
      const response = await this.$axios.get("projects");
      commit("SET_PROJECTS", response.data.data.projects);
    } catch (e) {
      console.log("ERROR GETTING PROJECTS");
    }
  },
  async setProject(context, project) {
    context.commit("SET", project);
  },
};
export const getters = {
  projects(state) {
    return state.projects;
  },
};
