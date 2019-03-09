import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
	renderList() {
		return this.props.songs.map((song) => {
			return (
				<div className="item" key={ song.title }>
					<div className="right floated content">
						<button 
							className="ui button primary"
							onClick={ () => this.props.selectSong(song)}
						>
							Select
						</button>
					</div>
					<div className='content'>
						{song.title}
					</div>
				</div>
			);
		});
	} // end renderList

	render() {
		return (
			<div className='ui divided list'>{ this.renderList() }</div>
		);
	}
}

/* takes the state (list of songs reducer and selectsong reducer from the redux-store to show up
 as props to the SongList component
*/
const mapStateToProps = (state) => {
	return {
		songs: state.songs
	};
}

// songlist creates the connect functionality
export default connect(mapStateToProps, {
	selectSong: selectSong
})(SongList);


