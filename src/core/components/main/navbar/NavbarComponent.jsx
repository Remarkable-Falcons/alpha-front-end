import React, { Component, useState } from 'react';
import PortalUtil from '../../../shared/utils/PortalUtil';
import NavbarService from '../../../shared/service/NavbarService';

export class NavbarComponent extends Component {

    render() {
        return (
            <div>
                <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark" style={{height: "8%"}}>
                    <a class="navbar-brand" href="#">{PortalUtil.getEnterprise().getName()}</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            { this.renderItems() }
                        </ul >

                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-user">
                                    </i>
                                    Usuários
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Configurar usuário</a>
                                    <a class="dropdown-item" href="/home/users">
                                        Visualizar usuários
                                    </a>
                                </div>
                            </li>
                        </ul>


                    </div >
                </nav >

            </div >
        );
    }


    renderItems = function(){
        const nav = new NavbarService().get().then(result => {
            result.data.fields.map(item => {

                if (item.fields) {
                    // é dropdown
                    return this.renderDropdownItem(item);
                } else {
                    // é navitem comum
                    return this.renderItem(item);
                }

            });
        });
    }

    renderItem = function(item){
        let navItemRendered;
        navItemRendered = (
            <li class="nav-item">
                <a class="nav-link" href={item.link}>
                    <i class={item.icon}></i>
                    {item.title}
                </a >
            </li >
        )
        // if(isFirst){
        //     navItemRendered = navItemRendered + (<span class="sr-only">(current)</span>);
        // }
        return navItemRendered;
    }

    renderDropdownItem = function(item) {
        return (
        <li class="nav-item dropdown">
             <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <i class={item.icon}>
                 <span class="badge badge-primary"></span>
               </i>
               {item.title}
             </a>
             <div class="dropdown-menu" aria-labelledby="navbarDropdown">
               { this.renderSubItems(item) }
             </div >
           </li >);
    }

    renderSubItems = function(item) {
        return item.fields.map((subItem => (
            <a class="dropdown-item" href={subItem.link}>
                {subItem.title}
            </a>
        )));
    }
    //function getNsadavItems() {
    // return (
    //     <div>
    //         <div class="item-navbar" *ngFor="let item of navbar.fields; first as isFirst">
    //         <li class="nav-item" *ngIf="!item.fields">
    //         <a class="nav-link" *ngIf="item.link" href="{{ item.link }}" target='{{ patternUrl.getTarget(item) }}'>
    //         <i class="{{item.icon}}"></i>
    //         {{ item.title }}
    //         <span class="sr-only" *ngIf="isFirst">(current)</span>
    //       </a >
    //   </li >



    //     <li class="nav-item dropdown" * ngIf= "item.fields" >
    //     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //       <i class="{{item.icon}}">
    //         <span class="badge badge-primary"></span>
    //       </i>
    //       {{item.title}}
    //     </a>
    //     <div class="dropdown-menu" aria-labelledby="navbarDropdown">
    //       <a class="dropdown-item" href="{{subItem.link}}" *ngFor="let subItem of item.fields">
    //         {{subItem.title}}
    //       </a>
    //     </div >
    //   </li >
    // </div >
    //         </div >
     //   );
     //   }

}