import { BehaviorSubject } from "rxjs";

export const contentsDeps$ = new BehaviorSubject(0);
contentsDeps$.subscribe();