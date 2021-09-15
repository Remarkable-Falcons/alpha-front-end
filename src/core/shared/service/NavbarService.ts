import { NavbarItem } from './../model/core/NavbarItem';

export default class NavbarService {
    
    public getAll(): NavbarItem[]{
        let navbarList: NavbarItem[] = [];
        navbarList.push(new NavbarItem(""));
    }
}