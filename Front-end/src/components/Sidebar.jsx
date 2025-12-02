import { Link } from "react-router-dom";

export default function Sidebar() {
	return (
		<nav className="p-4">
			<ul className="space-y-2">
				<li>
					<Link to="/" className="block px-3 py-2 rounded hover:bg-zinc-800">Dashboard</Link>
				</li>
				<li>
					<Link to="/study" className="block px-3 py-2 rounded hover:bg-zinc-800">Study Mode</Link>
				</li>
				<li>
					<Link to="/exam" className="block px-3 py-2 rounded hover:bg-zinc-800">Exam Mode</Link>
				</li>
				<li>
					<Link to="/settings" className="block px-3 py-2 rounded hover:bg-zinc-800">Settings</Link>
				</li>
			</ul>
		</nav>
	);
}
