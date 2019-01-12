import {
  SUBMITTED,
  LOADING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  SELECT_OPEN,
  SELECT_CLOSE,
  MRP_NAME_UPDATE,
  MRP_DATE_UPDATE,
  IVL_KEY_UPDATE,
  IVL_YEAR_UPDATE,
  STAR_NAME_UPDATE,
  FINAL_QUERY,
  SHOW_RESULT,
  ERROR
} from "./action_types";

//  APOD  ////////////////////////////////////////////////////

export function getApod() {
  return function(dispatch) {
    dispatch(loading());
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=1bLpXwhcARlJOhP0k9rQ0PBxWtO7JJRflDIeg16p"
    )
      .then(response => response.json())
      .then(data => {
        const received = {
          artist: data.copyright,
          title: data.title,
          date: data.date,
          explanation: data.explanation,
          link: data.url,
          media_type: data.media_type
        };
        dispatch(fetchSuccess());
        dispatch(showResult(received));
      })
      .catch(error => {
        dispatch(fetchFailure());
        console.error("Error:", error);
      });
  };
}

//  MRP  ////////////////////////////////////////////////////

export function onOpen() {
  return function(dispatch) {
    dispatch({
      type: SELECT_OPEN,
      payload: true
    });
  };
}
export function onClose() {
  return function(dispatch) {
    dispatch({
      type: SELECT_CLOSE,
      payload: false
    });
  };
}

export function mrpNameUpdate(name) {
  return function(dispatch) {
    dispatch({
      type: MRP_NAME_UPDATE,
      payload: name
    });
  };
}

export function mrpDateUpdate(date) {
  return function(dispatch) {
    dispatch({
      type: MRP_DATE_UPDATE,
      payload: date
    });
  };
}

export function getMrp() {
  return function(dispatch, getState) {
    const state = getState().mrpForm;
    const sent = {
      name: state.name,
      date: state.date
    };
    const endpoint = `https://api.nasa.gov/mars-photos/api/v1/rovers/${
      sent.name
    }/photos?earth_date=${
      sent.date
    }&api_key=1bLpXwhcARlJOhP0k9rQ0PBxWtO7JJRflDIeg16p`;

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        if (data.photos.length === 0) {
          dispatch(onError());
        } else {
          dispatch(loading());
          const received = {
            name: data.photos.map(e => e.rover.name),
            earth_date: data.photos.map(e => e.earth_date),
            photos: data.photos
          };
          console.log(received);
          dispatch(fetchSuccess());
          dispatch(showResult(received));
        }
      })
      .catch(error => {
        dispatch(fetchFailure());
        console.error("Error:", error);
      });
  };
}

//  IVL  ////////////////////////////////////////////////////

export function ivlKeyUpdate(keyword) {
  return function(dispatch) {
    dispatch({
      type: IVL_KEY_UPDATE,
      payload: keyword
    });
  };
}

export function ivlYearUpdate(year) {
  return function(dispatch) {
    dispatch({
      type: IVL_YEAR_UPDATE,
      payload: year
    });
  };
}

export function getIvl() {
  return function(dispatch, getState) {
    const state = getState().ivlForm;
    const sent = {
      keyword: state.keyword,
      year: state.year
    };
    const endpoint = `https://images-api.nasa.gov/search?q=${sent.keyword}%${
      sent.year
    }`;

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        if (data.collection.items.length === 0) {
          dispatch(onError());
        } else {
          dispatch(loading());
          const received = {
            info: data.collection.items.map(i => i)
          };
          console.log(received);
          dispatch(fetchSuccess());
          dispatch(showResult(received));
        }
      })
      .catch(error => {
        dispatch(fetchFailure());
        console.error("Error:", error);
      });
  };
}

//  TECHPORT  ////////////////////////////////////////////////////

export function getTechport() {
  return function(dispatch) {
    fetch(
      "https://api.nasa.gov/techport/api/projects?api_key=1bLpXwhcARlJOhP0k9rQ0PBxWtO7JJRflDIeg16p"
    )
      .then(response => response.json())
      .then(data => {
        const receivedIds = {
          id: data.projects.projects.map(i => i.id)
        };
        dispatch(techportFetch(receivedIds));
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };
}

export function techportFetch(receivedIds) {
  return function(dispatch) {
    const idParams =
      receivedIds.id[Math.floor(Math.random() * receivedIds.id.length)];
    fetch(
      `https://api.nasa.gov/techport/api/projects/${idParams}?api_key=1bLpXwhcARlJOhP0k9rQ0PBxWtO7JJRflDIeg16p`
    )
      .then(response => response.json())
      .then(data => {
        let image;
        if (data.project.library === "") {
          image = null;
        } else if (data.project.library.libraryItem instanceof Array) {
          image = data.project.library.libraryItem[1].files.file.url;
        } else if (data.project.library.libraryItem instanceof Object) {
          image = data.project.library.libraryItem.files.file.url;
        }

        if (
          data.project.description === undefined ||
          data.project.endDate === undefined
        ) {
          dispatch(getTechport());
        } else {
          const received = {
            id: data.project.id,
            title: data.project.title,
            endDate: data.project.endDate,
            img_src: image,
            description: data.project.description,
            benefits: data.project.benefits
          };
          console.log(received);
          dispatch(showResult(received));
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };
}

//  SPACEX  ////////////////////////////////////////////////////

export function getSpacex() {
  return function(dispatch) {
    dispatch(loading());
    const flightNumber = Math.floor(Math.random() * 73 + 1);
    console.log(flightNumber);
    fetch(`https://api.spacexdata.com/v3/launches/${flightNumber}`)
      .then(response => response.json())
      .then(data => {
        const received = {
          flight_number: data.flight_number,
          mission_name: data.mission_name,
          launch_year: data.launch_year,
          rocket_name: data.rocket.rocket_name,
          mission_patch: data.links.mission_patch,
          article_link: data.links.article_link,
          video_link: data.links.video_link,
          wikipedia: data.links.wikipedia,
          details: data.details
        };
        console.log(received);
        dispatch(showResult(received));
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };
}

//  STARMAP  ////////////////////////////////////////////////////

export function starNameUpdate(starName) {
  return function(dispatch) {
    dispatch({
      type: STAR_NAME_UPDATE,
      payload: starName
    });
  };
}

export function getFinalQuery() {
  return function(dispatch, getState) {
    const state = getState().starForm;
    const star = "?object=" + state.starName;

    const finalUrl = `https://server7.sky-map.org/skywindow${star}&ra=5.59&de=-5.45&zoom=6&show_grid=1&show_constellation_lines=1&show_constellation_boundaries=1&show_const_names=0&show_galaxies=1&img_source=DSS2`;
    dispatch(updateUrl(finalUrl));
  };
}

export function updateUrl(finalUrl) {
  return function(dispatch) {
    dispatch({
      type: FINAL_QUERY,
      payload: true,
      finalUrl: finalUrl
    });
    console.log(finalUrl);
  };
}

/////////////////////////////////////////////////////////////////

export function showResult(received) {
  return function(dispatch) {
    dispatch({
      type: SHOW_RESULT,
      payload: true,
      receivedInfo: received
    });
  };
}

export function submitted() {
  return function(dispatch) {
    dispatch({
      type: SUBMITTED,
      payload: true
    });
  };
}

export function loading() {
  return function(dispatch) {
    dispatch({
      type: LOADING,
      payload: true
    });
  };
}

export function fetchSuccess() {
  return function(dispatch) {
    dispatch({
      type: FETCH_SUCCESS,
      payload: true
    });
  };
}

export function fetchFailure() {
  return function(dispatch) {
    dispatch({
      type: FETCH_FAILURE,
      payload: true
    });
  };
}

export function onError() {
  return function(dispatch) {
    dispatch({
      type: ERROR,
      payload: true
    });
  };
}
