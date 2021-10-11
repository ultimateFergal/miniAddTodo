let styles= {
    taskContainer: {
        justifyContent: 'center',
        display: 'flex',
    },
    taskWrapper: {
        marginBottom: 12,
        width: '80%',
        textAlign: 'center',
        alignSelf: 'center',
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'space-between',
        boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
        backgroundColor: 'lightgrey',
    },
    task: {
        textAlign: 'right',
        textDEcoration: 'none',
        paddingLeft: 20,
        fontSize: 20,
    },
    iconsWrapper: {
        paddingTop: 20,
    },
    completedIcon: {
        fontSize: 20,
        color: 'springgreen',
    },
    deleteIcon: {
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 20,
        color: 'red',
        cursor: 'pointer',
    }
}

export default styles