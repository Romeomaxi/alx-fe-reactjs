const UserProfile = (props) => {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '10px' }}>{props.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold', color: 'darkred' }}>{props.age}</span></p>
            <p style={{ fontStyle: 'italic' }}>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;