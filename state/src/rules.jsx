export default function Rules() {
    return (
        <div className="rules">
            <h1>Hooks rules</h1>

            <h2>Only Call Hooks at the Top Level</h2>
            <p>
                <b>Don’t call Hooks inside loops, conditions, or nested functions.</b> Instead, always use Hooks at the top level of your React function, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls.
            </p>

            <h2>Only Call Hooks from React Functions</h2>
            <p>
                <b>Don’t call Hooks from regular JavaScript functions. </b>Instead, you can
            </p>
            <ul>
                <li>✅ Call Hooks from React function components.</li>
                <li>✅ Call Hooks from custom Hooks</li>
            </ul>

            <h2>Remove unnecessary state</h2>
            <p>
                A state variable is only necessary to keep information between re-renders of a component. Within a single event handler, a regular variable will do fine. Don’t introduce state variables when a regular variable works well.
            </p>
        </div>
    );
}