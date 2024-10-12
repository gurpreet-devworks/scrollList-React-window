import React from "react";
import "../src/App.css";
import ScrollableList from "./components/ScrollableList/ScrollableList";

function App() {
	return (
		<div className='App'>
			<h1 style={{ textAlign: "center" }}>
				Scrollable List with react-window
			</h1>
			<ScrollableList />
		</div>
	);
}

export default App;
