import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { NotFound, Navbar } from "../components";

import {
  HistoryPage,
  HomePage,
  LikeVideoPage,
  PlaylistMoviesPage,
  PlaylistPage,
  SingleVideoPage,
  VideoListingPage,
  WatchLaterPage
} from "../UI/Pages";
import {
  VideoDescriptionData,
  VideoData,
  UserHistoryData,
  WatchLaterData,
  PlayListData,
  ToastContextData,
  AuthContextData,
} from "../contexts/index";

const Routing = () => {
  return (
    <>
      <Router>
        <ToastContextData>
          <PlayListData>
            <UserHistoryData>
              <VideoDescriptionData>
                <VideoData>
                  <WatchLaterData>
                    <Navbar />
                    <Routes>
                      <Route path="/mockman" element={<Mockman />} />
                      <Route 
                        path="/"
                        element={<HomePage />} 
                      />
                      <Route
                        path="/watch/:id"
                        element={<SingleVideoPage />}
                      />
                      <Route
                        path="/movies"
                        element={<VideoListingPage />}
                      />
                      <Route
                        path="/likeplaylist"
                        element={<LikeVideoPage />}
                      />
                      <Route path="/history" element={<HistoryPage />} />
                      <Route
                        path="/watchlater"
                        element={<WatchLaterPage />}
                      />
                      <Route path="/playlist" element={<PlaylistPage />} />

                      <Route
                        path="/playlist/:title"
                        element={<PlaylistMoviesPage />}
                      />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </WatchLaterData>
                </VideoData>
              </VideoDescriptionData>
            </UserHistoryData>
          </PlayListData>
        </ToastContextData>
      </Router>
    </>
  );
};

export default Routing;
