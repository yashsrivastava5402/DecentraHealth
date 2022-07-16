import React from "react"
import { useNavigate } from "react-router";

export default function Banner(){
const navigate = useNavigate();

  return (
    <>
    <main class="bg-fuchsia-200 flex h-[591px]">
      <div class="main py-36 pl-20">
        <div class="text-8xl">Best Health Care!!</div>
        <p class="py-3 w-1/3 text-xl text-[#af9c4d]">
          All yours Medical Facilites at one Place!!! Book Your Appointments, View your Medical Reports, History Linked with your Aadhar.
          The Best thing about this, Its Free!!!
          Bringing Innovations In Health And Learning To The Global Community!
          </p>
        <div class="my-10 text-3xl">
          <button class="bg-purple-800 px-10 py-4 rounded-3xl text-white hover:text-slate-900 hover:bg-[#93bc9c]" onClick={() => {navigate("/PatientLogin");}}>Patient</button>
          <button class="bg-purple-800 px-10 py-4 rounded-3xl text-white hover:text-slate-900 hover:bg-[#93bc9c] mx-3" onClick={() => {navigate("/DoctorLogin");}}>Doctor</button>
        </div>
        <img class="w-1/3 absolute left-[950px] top-32" src="/image-from-rawpixel-id-2285047-original.png" alt="" />
        </div>
    </main>
    <footer class="text-center text-white bg-fuchsia-200">
      <div class="container h-24">
      <div class="center mb-9 py-auto">
      <div className="flex justify-center">
      <svg class="mr-10 text-gray-800" width="24" height="24" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0 M 733 205C 733 205 733 332 733 332C 733 332 658 332 658 332C 599 332 587 360 587 402C 587 402 587 493 587 493C 587 493 728 493 728 493C 728 493 710 635 710 635C 710 635 587 635 587 635C 587 635 587 992 587 992C 558 997 529 1000 500 1000C 480 1000 460 999 440 996C 440 996 440 635 440 635C 440 635 317 635 317 635C 317 635 317 493 317 493C 317 493 440 493 440 493C 440 493 440 388 440 388C 440 266 514 199 623 199C 675 199 720 203 733 205C 733 205 733 205 733 205"/></svg>
      <svg class="mr-10 text-gray-800" width="24" height="24" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0 M 336 332C 336 332 336 789 336 789C 336 789 211 789 211 789C 211 789 211 332 211 332C 211 332 336 332 336 332M 346 206C 346 206 346 206 346 206C 346 247 313 280 273 280C 233 280 201 247 201 206C 201 166 233 133 273 133C 313 133 346 166 346 206M 834 508C 834 508 834 789 834 789C 834 789 709 789 709 789C 709 789 709 556 709 556C 709 416 543 427 543 556C 543 556 543 789 543 789C 543 789 419 789 419 789C 419 789 419 332 419 332C 419 332 543 332 543 332C 543 332 543 406 543 406C 601 298 834 290 834 508"/></svg>
      <svg class="mr-10 text-gray-800" width="24" height="24" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d=" M 500 0C 500 0 500 0 500 0C 776 0 1000 224 1000 500C 1000 720 857 908 659 974C 634 979 625 963 625 950C 625 933 626 879 626 813C 626 766 610 736 592 720C 703 708 820 665 820 473C 820 418 801 374 769 339C 774 327 791 275 764 207C 764 207 722 193 626 258C 586 247 544 241 501 241C 459 241 416 247 376 258C 281 194 239 207 239 207C 211 275 229 327 234 339C 202 374 183 419 183 473C 183 665 299 708 410 720C 396 733 383 755 378 787C 349 800 278 821 233 746C 223 731 195 694 156 695C 114 695 139 718 156 728C 178 740 202 784 208 798C 218 826 250 880 376 857C 376 899 376 938 376 950C 376 963 367 978 342 974C 143 908 0 721 0 500C 0 224 224 0 500 0"/></svg>
      <svg class="mr-10 text-gray-800" width="24" height="24" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0 M 342 828C 252 828 163 802 88 754C 175 764 265 739 333 685C 266 685 203 640 181 577C 188 566 232 579 253 568C 178 554 119 482 121 406C 140 412 170 426 196 424C 124 379 100 276 144 204C 227 306 354 371 485 376C 474 330 484 278 513 240C 564 169 672 152 741 204C 774 247 827 205 865 189C 873 206 830 262 799 277C 829 274 859 266 888 254C 886 271 839 317 811 337C 816 452 777 568 705 658C 619 768 480 830 342 828"/></svg>
      <svg class="mr-10 text-gray-800" width="24" height="24" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0 M 185 525C 185 525 185 525 185 525C 244 492 309 465 370 438C 476 394 581 350 688 309C 709 302 746 296 750 326C 748 370 740 413 734 457C 720 552 703 647 687 742C 681 774 642 790 616 770C 555 729 494 688 434 646C 414 626 432 597 450 583C 500 533 553 491 601 439C 614 408 576 434 563 442C 495 490 428 540 355 581C 318 602 275 584 238 573C 205 559 156 546 185 525C 185 525 185 525 185 525"/></svg>
      </div>
      <p class="text-center my-6">
        © 2022 Copyright
      </p>
      </div>
      </div>
    </footer>
    </>  
  );
}