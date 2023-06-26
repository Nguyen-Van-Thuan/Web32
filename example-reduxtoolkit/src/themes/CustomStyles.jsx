import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    buttonBlack: {
        background: "#000!important",
        marginRight: "15px!important",
        color: "#fff!important"
    },
    buttonViolet: {
        background: "violet!important",
        marginLeft: "15px!important",
        color: "#fff!important"
    }
})

export default useStyles

// Custom style cua 1 thanh phan trong ung dung thong qua hook: makeStyles.

// buttonBlack, buttonViolet => className de su dung o cac thanh phan trong components.