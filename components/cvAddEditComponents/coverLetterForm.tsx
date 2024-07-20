import {
    Card,
    CardContent,
    TextField,
    Typography,
  } from "@mui/material";

interface CoverLetterProps {
    cover_letter: string;
    setCover_letter: (e: any) => void;
}

const CoverLetterForm = (props: CoverLetterProps) => {
    return (
        
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Cover Letter
            </Typography>
            <br />

            <TextField
              id="cover-letter"
              className="campoFull campoComPadding"
              label="Cover Later"
              type="text"
              value={props.cover_letter}
              variant="outlined"
              autoComplete="cover-letter"
              minRows={5}
              multiline
              required
              onChange={(e) => {
                props.setCover_letter(e.target.value);
              }}
            />
          </CardContent>
        </Card>
    )
}

export default CoverLetterForm;