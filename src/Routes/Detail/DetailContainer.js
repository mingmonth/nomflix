import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;

    const { isMovie } = this.state;
    // console.log(this.props);
    // console.log(parseInt(id));
    const parseId = parseInt(id);
    if (isNaN(parseId)) {
      return push("/");
    }
    // console.log(this.isMovie);
    let result = null;
    try {
      /*if (isMovie) {
        const request = await moviesApi.detail(parseId);
        result = request.data;
      } else {
        const request = await tvApi.detail(parseId);
        result = request.data;
      }*/
      ({ data: result } = isMovie
        ? await moviesApi.detail(id)
        : await tvApi.detail(id));
      //console.log(result);
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    // console.log(this.props);
    const { result, error, loading } = this.state;
    console.log(result);
    console.log(this.state);
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
