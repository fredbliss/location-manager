/*import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';

export default [
    { path: 'details/:auctionHouse/:id/:title', component: DetailsComponent },
    { path: 'details/:auctionHouse/:id', component: DetailsComponent },
    { path: '', component: SearchComponent },
];*/

import { MainComponent } from "./main/main.component";

export default [
    { path: '', component: MainComponent },
    //{ path: '/location/:id', component: LocationComponent }
]