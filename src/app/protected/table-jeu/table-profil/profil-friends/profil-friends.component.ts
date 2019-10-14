import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enjeu-profil-friends',
  templateUrl: './profil-friends.component.html',
  styleUrls: ['./profil-friends.component.scss']
})
export class ProfilFriendsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  friendsColumns = ['propriete', 'valeur'];
  dataFriends = FRIENDS_DATA;
  }
  /*Profil : statistiques*/
  export interface FriendsProfil {
    propriete: string;
    valeur: string;
  }

  const FRIENDS_DATA: FriendsProfil[] = [
    {propriete: 'Nbr Compagnons', valeur: '0'},
    {propriete: 'Liste', valeur: 'todo component'},
    {propriete: 'Recherche', valeur: 'todo component'},
    {propriete: 'Invitation', valeur: '1'},
  ];
