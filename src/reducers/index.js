// reducer to select song on click selection
// reduce as a static list of songs
import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{
			title: '100 miles',
			duration: '5:00'
		},
		{
			title: 'I want it that way',
			duration: '4:25'
		},
		{
			title: 'Mamma Mia',
			duration: '6:55'
		},
		{
			title: 'Thermal Heat',
			duration: '3:52'
		}
	];
}


const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload
	}
	return selectedSong;
}

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});
