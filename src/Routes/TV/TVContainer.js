import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
  state = {
    popular: null,
    topRated: null,
    airingToday: null,
    loading: true,
    error: null
  };

  render() {
    const { popular, topRated, airingToday, loading, error } = this.state;
    return (
      <TVPresenter
        popular={popular}
        topRated={topRated}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}
