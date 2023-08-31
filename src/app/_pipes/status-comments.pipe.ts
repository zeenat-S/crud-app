import { Pipe, PipeTransform } from '@angular/core';
import comments from 'src/assets/comments.json';

@Pipe({
  name: 'statusComments'
})
export class StatusCommentsPipe implements PipeTransform {

  transform(status: string): string {
    const commentObject = comments.find(comment => comment.status === status)
    return commentObject ? commentObject.comment : 'Unknown Status'
  }

}
