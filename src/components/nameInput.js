
const NameInput = ({ name, setName }) => {
    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter your name"
                className="text-box"
            />
        </div>
    );
};


export default NameInput;