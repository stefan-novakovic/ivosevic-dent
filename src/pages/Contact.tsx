import PageLayout from '../layout/PageLayout';
import { MdOutlineHomeWork } from 'react-icons/md';
import { IoCallOutline, IoCalendarOutline } from 'react-icons/io5';
import {
   AiOutlineMail,
   AiOutlineClockCircle,
   AiOutlineFacebook,
   AiOutlineInstagram
} from 'react-icons/ai';
import { CiMedicalCross } from 'react-icons/ci';
import useResponsiveTextareaRows from '../hooks/useResponsiveTextareaRows';

const Contact = () => {
   const rows = useResponsiveTextareaRows(); // Add this line at the top of the component
   return (
      <PageLayout>
         <h1 className="text-text-inverse dark:text-text mb-7 text-3xl font-semibold transition-colors duration-200 md:text-4xl lg:mb-8">
            Kontaktirajte nas
         </h1>
         <div className="mx-auto flex min-h-[calc(100vh-67.89px)] w-full max-w-[1272px] flex-col gap-8 md:min-h-[calc(100vh-78.59px-72px-28px-80px)] md:flex-row md:items-center md:gap-12 lg:gap-16 xl:gap-24 2xl:gap-32">
            {/* Left side */}
            <form
               onSubmit={(e) => e.preventDefault()}
               className="flex w-full flex-col justify-center md:min-h-[calc(100vh-78.59px-72px-28px-80px)] md:flex-1/2"
            >
               <div className="w-full sm:px-4 md:mx-auto md:max-w-xl md:px-0">
                  <div className="mb-3">
                     <label className="text-text-inverse dark:text-text block text-sm font-medium">
                        Ime i prezime
                     </label>
                     <input
                        type="text"
                        className="focus:ring-light-bg border-light-bg/25 dark:border-text/75 text-text-inverse dark:text-text mt-1 w-full rounded-md border p-2 focus:ring-2 focus:outline-none"
                     />
                  </div>

                  <div className="mb-3">
                     <label className="text-text-inverse dark:text-text block text-sm font-medium">
                        Email
                     </label>
                     <input
                        type="email"
                        className="focus:ring-light-bg border-light-bg/25 dark:border-text/75 text-text-inverse dark:text-text mt-1 w-full rounded-md border p-2 focus:ring-2 focus:outline-none"
                     />
                  </div>

                  <div className="mb-3">
                     <label className="text-text-inverse dark:text-text block text-sm font-medium">
                        Telefon
                     </label>
                     <input
                        type="tel"
                        className="focus:ring-light-bg border-light-bg/25 dark:border-text/75 text-text-inverse dark:text-text mt-1 w-full rounded-md border p-2 focus:ring-2 focus:outline-none"
                     />
                  </div>

                  <div className="mb-3 flex flex-col items-center gap-3 lg:flex-row lg:gap-4">
                     <div className="w-full lg:flex-1/2">
                        <label className="text-text-inverse dark:text-text block text-sm font-medium">
                           Preferirani datum termina
                        </label>
                        <input
                           type="date"
                           className="focus:ring-light-bg border-light-bg/25 dark:border-text/75 text-text-inverse dark:text-text mt-1 w-full rounded-md border p-2 focus:ring-2 focus:outline-none"
                        />
                     </div>

                     <div className="w-full lg:flex-1/2">
                        <label className="text-text-inverse dark:text-text block text-sm font-medium">
                           Preferirano vreme
                        </label>
                        <input
                           type="time"
                           min="12:00"
                           max="19:30"
                           step="900"
                           className="focus:ring-light-bg border-light-bg/25 dark:border-text/75 text-text-inverse dark:text-text mt-1 w-full rounded-md border p-2 focus:ring-2 focus:outline-none"
                        />
                     </div>
                  </div>

                  <div className="mb-4">
                     <label className="text-text-inverse dark:text-text block text-sm font-medium">
                        Vaša poruka
                     </label>
                     <textarea
                        className="focus:ring-light-bg border-light-bg/25 dark:border-text/75 text-text-inverse dark:text-text mt-1 w-full resize-none rounded-md border p-2 focus:ring-2 focus:outline-none"
                        rows={rows}
                     ></textarea>
                  </div>

                  <button
                     type="submit"
                     className="bg-light-bg dark:bg-dark-bg-card w-full rounded-md px-4 py-2 font-medium text-white transition hover:brightness-110 active:brightness-100"
                  >
                     Zakaži termin
                  </button>
               </div>
            </form>

            {/* Right side */}
            <div className="text-text-inverse dark:text-text flex flex-1/2 flex-col gap-[13px] tracking-tight sm:px-4 md:px-0 md:text-lg xl:text-xl">
               <address className="italic">
                  <a
                     className="hover:text-light-bg hover:dark:text-text/70 flex items-center justify-start gap-3 active:brightness-80 lg:gap-[7px]"
                     href="https://maps.app.goo.gl/wPSYZqSynJYRbWXWA"
                     target="_blank"
                  >
                     <div className="aspect-square min-w-[30px]">
                        <MdOutlineHomeWork size={30} />
                     </div>
                     <div>
                        Dr Svetislava Kasapinovića 25/12,{' '}
                        <span className="whitespace-nowrap">
                           21000 Novi Sad
                        </span>
                     </div>
                  </a>
               </address>

               <a
                  href="tel:+381653583313"
                  className="hover:text-light-bg hover:dark:text-text/70 flex items-center justify-start gap-3 italic active:brightness-80 lg:gap-[7px]"
               >
                  <div className="aspect-square min-w-[30px]">
                     <IoCallOutline size={30} />
                  </div>
                  065/358-33-13
               </a>

               <a
                  href="mailto:ivosevicdent@gmail.com"
                  className="hover:text-light-bg hover:dark:text-text/70 flex items-center justify-start gap-3 italic active:brightness-80 lg:gap-[7px]"
               >
                  <div className="aspect-square min-w-[30px]">
                     <AiOutlineMail size={30} />
                  </div>
                  ivosevicdent@gmail.com
               </a>

               <div className="flex items-center justify-start gap-3 lg:gap-[7px]">
                  <div className="aspect-square min-w-[30px]">
                     <IoCalendarOutline size={30} />
                  </div>
                  <span>Ponedeljak - Petak</span>
               </div>

               <div className="flex items-center justify-start gap-3 lg:gap-[7px]">
                  <div className="aspect-square min-w-[30px]">
                     <AiOutlineClockCircle size={30} />
                  </div>
                  <span>12:00 - 20:00</span>
               </div>

               <div className="flex items-center justify-start gap-3 lg:gap-[7px]">
                  <div className="aspect-square min-w-[30px]">
                     <CiMedicalCross size={30} />
                  </div>
                  <span>
                     Vikendom po zakazanim terminima i{' '}
                     <span className="whitespace-nowrap">
                        hitnim intervencijama
                     </span>
                  </span>
               </div>

               <div className="flex flex-col gap-[13px]">
                  <a
                     className="hover:dark:text-text/70 flex items-center justify-start gap-3 italic hover:text-[#0866FF] active:brightness-80 lg:gap-[7px]"
                     href="https://www.facebook.com/profile.php?id=100057189200242#"
                     target="_blank"
                  >
                     <div className="aspect-square min-w-[30px]">
                        <AiOutlineFacebook size={30} />
                     </div>
                     <span>Stomatološka ordinacija Ivošević</span>
                  </a>

                  <a
                     className="hover:dark:text-text/70 flex items-center justify-start gap-3 italic hover:text-[#F5008E] active:brightness-80 lg:gap-[7px]"
                     href="https://www.instagram.com/ordinacija_ivosevic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                     target="_blank"
                  >
                     <div className="aspect-square min-w-[30px]">
                        <AiOutlineInstagram size={30} />
                     </div>
                     <span>Stomatološka ordinacija Ivošević</span>
                  </a>
               </div>
            </div>
         </div>
      </PageLayout>
   );
};
export default Contact;
