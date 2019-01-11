import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articles$:object[]=[
    {
      title:"article",
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis eget diam nec faucibus. Nulla vel malesuada tortor. Nunc dapibus placerat neque, in lobortis libero accumsan eu. Curabitur sed finibus metus. Etiam cursus dapibus semper. Aenean eu libero eros. Fusce imperdiet arcu ac nisl porta aliquet. Donec ac scelerisque quam. Quisque quis ligula augue. Ut sit amet arcu nibh. Phasellus ut iaculis lorem.\n' +
        '\n' +
        'Fusce eget magna eget purus feugiat rhoncus. Integer a dignissim dolor. Aenean molestie massa diam, et lacinia quam pulvinar et. Nam vitae enim augue. Nullam ac leo dui. Cras ut purus fermentum, ultrices velit cursus, interdum tellus. Aliquam erat volutpat. Sed auctor ante at mi tristique, non ultrices lorem commodo.',
      image:"https://www.dailydot.com/wp-content/uploads/2018/04/letoucandoge.png"
    },
    {
      title:"article",
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis eget diam nec faucibus. Nulla vel malesuada tortor. Nunc dapibus placerat neque, in lobortis libero accumsan eu. Curabitur sed finibus metus. Etiam cursus dapibus semper. Aenean eu libero eros. Fusce imperdiet arcu ac nisl porta aliquet. Donec ac scelerisque quam. Quisque quis ligula augue. Ut sit amet arcu nibh. Phasellus ut iaculis lorem.\n' +
        '\n' +
        'Fusce eget magna eget purus feugiat rhoncus. Integer a dignissim dolor. Aenean molestie massa diam, et lacinia quam pulvinar et. Nam vitae enim augue. Nullam ac leo dui. Cras ut purus fermentum, ultrices velit cursus, interdum tellus. Aliquam erat volutpat. Sed auctor ante at mi tristique, non ultrices lorem commodo.',
      image:"https://www.dailydot.com/wp-content/uploads/2018/04/letoucandoge.png"
    },
    {
      title:"article",
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis eget diam nec faucibus. Nulla vel malesuada tortor. Nunc dapibus placerat neque, in lobortis libero accumsan eu. Curabitur sed finibus metus. Etiam cursus dapibus semper. Aenean eu libero eros. Fusce imperdiet arcu ac nisl porta aliquet. Donec ac scelerisque quam. Quisque quis ligula augue. Ut sit amet arcu nibh. Phasellus ut iaculis lorem.\n' +
        '\n' +
        'Fusce eget magna eget purus feugiat rhoncus. Integer a dignissim dolor. Aenean molestie massa diam, et lacinia quam pulvinar et. Nam vitae enim augue. Nullam ac leo dui. Cras ut purus fermentum, ultrices velit cursus, interdum tellus. Aliquam erat volutpat. Sed auctor ante at mi tristique, non ultrices lorem commodo.',
      image:"https://www.dailydot.com/wp-content/uploads/2018/04/letoucandoge.png"
    },
    {
      title:"article",
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis eget diam nec faucibus. Nulla vel malesuada tortor. Nunc dapibus placerat neque, in lobortis libero accumsan eu. Curabitur sed finibus metus. Etiam cursus dapibus semper. Aenean eu libero eros. Fusce imperdiet arcu ac nisl porta aliquet. Donec ac scelerisque quam. Quisque quis ligula augue. Ut sit amet arcu nibh. Phasellus ut iaculis lorem.\n' +
        '\n' +
        'Fusce eget magna eget purus feugiat rhoncus. Integer a dignissim dolor. Aenean molestie massa diam, et lacinia quam pulvinar et. Nam vitae enim augue. Nullam ac leo dui. Cras ut purus fermentum, ultrices velit cursus, interdum tellus. Aliquam erat volutpat. Sed auctor ante at mi tristique, non ultrices lorem commodo.',
      image:"https://www.dailydot.com/wp-content/uploads/2018/04/letoucandoge.png"
    },
    {
      title:"article",
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis eget diam nec faucibus. Nulla vel malesuada tortor. Nunc dapibus placerat neque, in lobortis libero accumsan eu. Curabitur sed finibus metus. Etiam cursus dapibus semper. Aenean eu libero eros. Fusce imperdiet arcu ac nisl porta aliquet. Donec ac scelerisque quam. Quisque quis ligula augue. Ut sit amet arcu nibh. Phasellus ut iaculis lorem.\n' +
        '\n' +
        'Fusce eget magna eget purus feugiat rhoncus. Integer a dignissim dolor. Aenean molestie massa diam, et lacinia quam pulvinar et. Nam vitae enim augue. Nullam ac leo dui. Cras ut purus fermentum, ultrices velit cursus, interdum tellus. Aliquam erat volutpat. Sed auctor ante at mi tristique, non ultrices lorem commodo.',
      image:"https://www.dailydot.com/wp-content/uploads/2018/04/letoucandoge.png"
    },
    {
      title:"article",
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis eget diam nec faucibus. Nulla vel malesuada tortor. Nunc dapibus placerat neque, in lobortis libero accumsan eu. Curabitur sed finibus metus. Etiam cursus dapibus semper. Aenean eu libero eros. Fusce imperdiet arcu ac nisl porta aliquet. Donec ac scelerisque quam. Quisque quis ligula augue. Ut sit amet arcu nibh. Phasellus ut iaculis lorem.\n' +
        '\n' +
        'Fusce eget magna eget purus feugiat rhoncus. Integer a dignissim dolor. Aenean molestie massa diam, et lacinia quam pulvinar et. Nam vitae enim augue. Nullam ac leo dui. Cras ut purus fermentum, ultrices velit cursus, interdum tellus. Aliquam erat volutpat. Sed auctor ante at mi tristique, non ultrices lorem commodo.',
      image:"https://www.dailydot.com/wp-content/uploads/2018/04/letoucandoge.png"
    },
    {
      title:"article",
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis eget diam nec faucibus. Nulla vel malesuada tortor. Nunc dapibus placerat neque, in lobortis libero accumsan eu. Curabitur sed finibus metus. Etiam cursus dapibus semper. Aenean eu libero eros. Fusce imperdiet arcu ac nisl porta aliquet. Donec ac scelerisque quam. Quisque quis ligula augue. Ut sit amet arcu nibh. Phasellus ut iaculis lorem.\n' +
        '\n' +
        'Fusce eget magna eget purus feugiat rhoncus. Integer a dignissim dolor. Aenean molestie massa diam, et lacinia quam pulvinar et. Nam vitae enim augue. Nullam ac leo dui. Cras ut purus fermentum, ultrices velit cursus, interdum tellus. Aliquam erat volutpat. Sed auctor ante at mi tristique, non ultrices lorem commodo.',
      image:"https://www.dailydot.com/wp-content/uploads/2018/04/letoucandoge.png"
    },
    {
      title:"article",
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis eget diam nec faucibus. Nulla vel malesuada tortor. Nunc dapibus placerat neque, in lobortis libero accumsan eu. Curabitur sed finibus metus. Etiam cursus dapibus semper. Aenean eu libero eros. Fusce imperdiet arcu ac nisl porta aliquet. Donec ac scelerisque quam. Quisque quis ligula augue. Ut sit amet arcu nibh. Phasellus ut iaculis lorem.\n' +
        '\n' +
        'Fusce eget magna eget purus feugiat rhoncus. Integer a dignissim dolor. Aenean molestie massa diam, et lacinia quam pulvinar et. Nam vitae enim augue. Nullam ac leo dui. Cras ut purus fermentum, ultrices velit cursus, interdum tellus. Aliquam erat volutpat. Sed auctor ante at mi tristique, non ultrices lorem commodo.',
      image:"https://www.dailydot.com/wp-content/uploads/2018/04/letoucandoge.png"
    },

    {
      title:"article",
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis eget diam nec faucibus. Nulla vel malesuada tortor. Nunc dapibus placerat neque, in lobortis libero accumsan eu. Curabitur sed finibus metus. Etiam cursus dapibus semper. Aenean eu libero eros. Fusce imperdiet arcu ac nisl porta aliquet. Donec ac scelerisque quam. Quisque quis ligula augue. Ut sit amet arcu nibh. Phasellus ut iaculis lorem.\n' +
        '\n' +
        'Fusce eget magna eget purus feugiat rhoncus. Integer a dignissim dolor. Aenean molestie massa diam, et lacinia quam pulvinar et. Nam vitae enim augue. Nullam ac leo dui. Cras ut purus fermentum, ultrices velit cursus, interdum tellus. Aliquam erat volutpat. Sed auctor ante at mi tristique, non ultrices lorem commodo.',
      image:"https://www.dailydot.com/wp-content/uploads/2018/04/letoucandoge.png"
    },
    {
      title:"article",
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis eget diam nec faucibus. Nulla vel malesuada tortor. Nunc dapibus placerat neque, in lobortis libero accumsan eu. Curabitur sed finibus metus. Etiam cursus dapibus semper. Aenean eu libero eros. Fusce imperdiet arcu ac nisl porta aliquet. Donec ac scelerisque quam. Quisque quis ligula augue. Ut sit amet arcu nibh. Phasellus ut iaculis lorem.\n' +
        '\n' +
        'Fusce eget magna eget purus feugiat rhoncus. Integer a dignissim dolor. Aenean molestie massa diam, et lacinia quam pulvinar et. Nam vitae enim augue. Nullam ac leo dui. Cras ut purus fermentum, ultrices velit cursus, interdum tellus. Aliquam erat volutpat. Sed auctor ante at mi tristique, non ultrices lorem commodo.',
      image:"https://www.dailydot.com/wp-content/uploads/2018/04/letoucandoge.png"
    }
  ];
  constructor() { }
  getAllArticles():object[]{
    return this.articles$;
  }
  getArticle(id:number){
    return this.articles$[id];
  }
}
