import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const Ratings = () => {
  const value = 3.5;
  return (
    <div className="flex flex-wrap justify-center gap-5 my-5 px-4 font-poppins ">
      {/* Rating Card 1 */}
      <div className="flex flex-col items-center md:w-1/3 w-full">
        <Paper elevation={3} className="p-5 w-full">
          <div className="flex justify-center -mt-10">
            <Avatar
              alt="Victor"
              src="https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/desktop/optimized/rev-d955463/lh3.googleusercontent.com/a-/ALV-UjWh3niHjCcx78cCrBJPJf2coWhXU309HrBveBMC8UNlBK_pSUg=s54-c-rp-mo-br100"
            />
          </div>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Rating
              name="text-feedback"
              value={value}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
          </Box>
          <p className=' text-center'>Very nice tech hub</p>
        </Paper>
      </div>

      {/* Rating Card 2 */}
      <div className="flex flex-col items-center md:w-1/3 w-full">
        <Paper elevation={3} className="p-5 w-full">
          <div className="flex justify-center -mt-10">
            <Avatar
              alt="Fans"
              src="https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/desktop/optimized/rev-d955463/lh3.googleusercontent.com/a-/ALV-UjVPuLeEcDs3rv68XSTZPbWO2gvRAtpPahkdWWhUVilvmERrPi8O=s54-c-rp-mo-ba4-br100"
            />
          </div>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Rating
              name="text-feedback"
              value={value}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
          </Box>
         <p> All your office equipment are always available here at Fullworks. We deal with
         information technology to the last.</p>
        </Paper>
      </div>

      {/* Rating Card 3 */}
      <div className="flex flex-col items-center md:w-1/3 w-full">
        <Paper elevation={3} className="p-5 w-full">
          <div className="flex justify-center -mt-10">
            <Avatar
              alt=""
              src="https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/desktop/optimized/rev-d955463/lh3.googleusercontent.com/a-/ALV-UjUAwaXLMg-g-bTNFuRifFRGCj_NxK2c2OEE3C3ARQ5RupanAbcJ=s54-c-rp-mo-br100"
            />
          </div>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Rating
              name="text-feedback"
              value={value}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
          </Box>
          <p>
            Timely response, great customer service, and top quality IT products. Fullworks is
            truly the best.
          </p>
        </Paper>
      </div>
    </div>
  );
};

export default Ratings;
