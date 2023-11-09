import { APP } from '@/constants/index.js';
import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(APP.PORT, () => {
    console.log(`Server is running on port ${APP.PORT}`);
});
//# sourceMappingURL=main.js.map