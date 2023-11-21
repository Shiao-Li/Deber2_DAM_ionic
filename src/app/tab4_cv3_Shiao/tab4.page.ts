import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  technologies = [
    { icon: 'https://media-asgard.s3.eu-west-1.amazonaws.com/9e203859-fbb2-4cec-afda-76ac67d7326f_html5-original.svg', alt: 'html', name: 'HTML' },
    { icon: 'https://media-asgard.s3.eu-west-1.amazonaws.com/74b1de9e-4322-4696-b5d3-3e0afbdb1d69_css3-original.svg', alt: 'css', name: 'CSS' },
    { icon: 'https://media-asgard.s3.eu-west-1.amazonaws.com/247875a9-ba0a-4529-8df6-f049dc829e67_cplusplus-original.svg', alt: 'c++', name: 'C++' },
    { icon: 'https://media-asgard.s3.eu-west-1.amazonaws.com/1262c8ae-77c8-418c-ade1-10c8b9ff55e2_python-original.svg', alt: 'py', name: 'Phyton' },
    { icon: 'https://media-asgard.s3.eu-west-1.amazonaws.com/b6433b93-4491-4d88-b692-a24f1e108bc7_javascript-original.svg', alt: 'js', name: 'JavaScript' },
    { icon: 'https://media-asgard.s3.eu-west-1.amazonaws.com/9d7bf8a6-34ae-48a9-b696-6697755f87d6_java-original.svg', alt: 'java', name: 'Java' },
    
  ];

  desiredTechnologies = [
    { icon: 'https://media-asgard.s3.eu-west-1.amazonaws.com/22/04/05/7c25acbb-fbb9-42f4-aef5-9b95c0b09e5e_visual-studio-code_i.svg', alt: 'vscode', name: 'vscode' },
    
  ];
  constructor() { }

}
