import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants";

const newsReducer = createSlice({
  name: "news",
  initialState,
  reducers: {
    addApprovedNews: (state, { payload }) => {
      const newNotApprovedNews = [];
      state.notApprovedNews.forEach((news) => {
        if (news.id !== payload.id) {
          newNotApprovedNews.push(news);
        }
      });
      return {
        ...state,
        notApprovedNews: newNotApprovedNews,
        approvedNews: [payload, ...state.approvedNews],
      };
    },
    addNotApprovedNews: (state, { payload }) => {
      return { ...state, notApprovedNews: [payload, ...state.notApprovedNews] };
    },
    deleteApprovedNews: (state, { payload }) => {
      const newApprovedNews = [];
      state.approvedNews.forEach((news) => {
        if (news.id !== payload.id) {
          newApprovedNews.push(news);
        }
      });
      return { ...state, approvedNews: newApprovedNews };
    },
    deleteNotApprovedNews: (state, { payload }) => {
      const newNotApprovedNews = [];
      state.notApprovedNews.forEach((news) => {
        if (news.id !== payload.id) {
          newNotApprovedNews.push(news);
        }
      });
      return { ...state, notApprovedNews: newNotApprovedNews };
    },
  },
});

export const {
  addApprovedNews,
  addNotApprovedNews,
  deleteApprovedNews,
  deleteNotApprovedNews,
} = newsReducer.actions;
export default newsReducer.reducer;
