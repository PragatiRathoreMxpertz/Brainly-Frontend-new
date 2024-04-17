// store.js
import { configureStore } from '@reduxjs/toolkit';
import AdventureDataSlice from "./Slice/AdventureData";

import FantasyDataSlice from "./Slice/FantasyData";
import HistoryfetchData from "./Slice/HistoryData";
import MysteryDataSlice from './Slice/MysteryData';
import ScienceDataSlice from './Slice/ScienceData';
import SportDataSlice from "./Slice/SportData";
import AuthSlice from './Slice/AuthSlice';
import adminSlice from './Slice/adminSlice'
import storySlice from './Slice/storySlice'
import DailyQuizSlice from "./Slice/DailyQuizSlice";
import LeaderBoardSlice from "./Slice/LeaderBoardSlice"
import WeeklySlice from "./Slice/WeeklySlice"
import DragDropSlice from './Slice/DragDropSlice';

export const store = configureStore({
  reducer: {
    Sciencedata: ScienceDataSlice,
    Fantasydata: FantasyDataSlice,
    Mydata: MysteryDataSlice,
    Historyedata: HistoryfetchData,
    Adventuredata: AdventureDataSlice,
    Sportedata: SportDataSlice,
    auth: AuthSlice,
    Admin: adminSlice,
    Story: storySlice,
    DailyQuiz:DailyQuizSlice,
    LeaderBoard:LeaderBoardSlice,
    WeeklySlice:WeeklySlice,
    DragDrop:DragDropSlice
  },
});
